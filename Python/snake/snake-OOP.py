import sys, tty, termios, time, random, select

# ================= CONFIG =================
lines = 15
columns = 50
VELOCIDAD = 0.1
USERNAME_MAX_LENGTH = 15
SCORE_MAX_LENGTH = 10

CURSOR_HIDE = "\033[?25l"
CURSOR_SHOW = "\033[?25h"
CLEAR_SCREEN = "\033c"
S_R = "\033[0m"
S_B = "\033[1m"

C_G = "\033[32m"
C_R = "\033[31m"
C_M = "\033[35m"
C_GRAY = "\033[37m"

SNAKE_BODY = "█"
initial_position = [(10, 10), (10, 9), (10, 8), (10, 7)]


class Terminal:
    def __init__(self):
        self.fd = sys.stdin.fileno()
        self.old_settings = termios.tcgetattr(self.fd)

    def set_cbreak(self):
        tty.setcbreak(self.fd)

    def restore(self):
        termios.tcsetattr(self.fd, termios.TCSADRAIN, self.old_settings)

    def hide_cursor(self):
        print(CURSOR_HIDE, end="")

    def show_cursor(self):
        print(CURSOR_SHOW)

    @staticmethod
    def move_cursor(r, c):
        print(f"\033[{r};{c}H", end="")

    @staticmethod
    def move_and_print(pos, txt):
        Terminal.move_cursor(pos[0], pos[1])
        print(txt, end="", flush=True)

    def read_key(self):
        if select.select([sys.stdin], [], [], 0)[0]:
            ch = sys.stdin.read(1)
            if ch == '\x1b':
                ch += sys.stdin.read(2)
                return {'\x1b[A': 'U', '\x1b[B': 'D', '\x1b[C': 'R', '\x1b[D': 'L'}.get(ch)
            if ch in 'qQ': return 'Q'
            if ch in 'pP': return 'P'
        return None


class Board:
    def __init__(self):
        self.limits = {}

    def draw(self):
        print(CLEAR_SCREEN, end="")
        print("""
██████╗░██╗░░░██╗████████╗██╗░░██╗░█████╗░███╗░░██╗  ░██████╗███╗░░██╗░█████╗░██╗░░██╗███████╗
██╔══██╗╚██╗░██╔╝╚══██╔══╝██║░░██║██╔══██╗████╗░██║  ██╔════╝████╗░██║██╔══██╗██║░██╔╝██╔════╝
██████╔╝░╚████╔╝░░░░██║░░░███████║██║░░██║██╔██╗██║  ╚█████╗░██╔██╗██║███████║█████═╝░█████╗░░
██╔═══╝░░░╚██╔╝░░░░░██║░░░██╔══██║██║░░██║██║╚████║  ░╚═══██╗██║╚████║██╔══██║██╔═██╗░██╔══╝░░
██║░░░░░░░░██║░░░░░░██║░░░██║░░██║╚█████╔╝██║░╚███║  ██████╔╝██║░╚███║██║░░██║██║░╚██╗███████╗
╚═╝░░░░░░░░╚═╝░░░░░░╚═╝░░░╚═╝░░╚═╝░╚════╝░╚═╝░░╚══╝  ╚═════╝░╚═╝░░╚══╝╚═╝░░╚═╝╚═╝░░╚═╝╚══════╝""")
        print(f"▄" * (columns + 2))
        print(f"█{' ' * columns}█\n" * lines, end="")
        print(f"▀" * (columns + 2))
        self.limits = {"U": 8, "D": lines + 9, "L": 1, "R": columns + 2}
        return self.limits


class Fruit:
    def __init__(self):
        self.position = None

    def spawn(self, snake_body, limits):
        pos = []
        for r in range(limits['U'] + 1, limits['D']):
            for c in range(limits['L'] + 1, limits['R']):
                if (r, c) not in snake_body:
                    pos.append((r, c))
        self.position = random.choice(pos)
        Terminal.move_and_print(self.position, "●")
        return self.position


class Snake:
    def __init__(self):
        self.body = initial_position[:]
        self.direction = 'R'

    def draw(self):
        for p in self.body:
            Terminal.move_and_print(p, f"{C_G}{SNAKE_BODY}{S_R}")

    def change_direction(self, new_dir):
        opposites = {'U': 'D', 'D': 'U', 'L': 'R', 'R': 'L'}
        if new_dir and opposites.get(new_dir) != self.direction:
            self.direction = new_dir

    def move(self):
        tail = self.body.pop()
        r, c = self.body[0]
        if self.direction == 'U': r -= 1
        if self.direction == 'D': r += 1
        if self.direction == 'L': c -= 1
        if self.direction == 'R': c += 1
        new_head = (r, c)
        self.body.insert(0, new_head)
        Terminal.move_and_print(new_head, f"{C_G}{SNAKE_BODY}{S_R}")
        Terminal.move_and_print(tail, " ")
        return tail

    def grow(self, tail):
        self.body.append(tail)

    def collides(self, limits):
        r, c = self.body[0]
        return (
            self.body[0] in self.body[1:] or
            r <= limits['U'] or r >= limits['D'] or
            c <= limits['L'] or c >= limits['R']
        )

    @property
    def head(self):
        return self.body[0]


class Game:
    def __init__(self):
        self.terminal = Terminal()
        self.board = Board()
        self.snake = None
        self.fruit = None
        self.score = 0
        self.user = ""

    def show_info(self):
        Terminal.move_cursor(lines + 10, 0)
        print(f"🐍 PUNTUACIÓN: {self.score}     🤖 JUGADOR: {self.user}", flush=True)

    def get_username(self):
        while not self.user:
            self.board.draw()
            self.user = input("🤖 NOMBRE: ")
            if len(self.user) >= USERNAME_MAX_LENGTH:
                self.user = ""

    def run(self):
        self.terminal.set_cbreak()
        self.terminal.hide_cursor()

        self.get_username()

        limits = self.board.draw()
        self.snake = Snake()
        self.snake.draw()
        self.fruit = Fruit()
        self.fruit.spawn(self.snake.body, limits)
        self.score = 0

        while True:
            key = self.terminal.read_key()
            if key == 'Q':
                break
            if key in ['U', 'D', 'L', 'R']:
                self.snake.change_direction(key)

            tail = self.snake.move()

            if self.snake.head == self.fruit.position:
                self.snake.grow(tail)
                self.score += 1
                self.fruit.spawn(self.snake.body, limits)

            if self.snake.collides(limits):
                break

            self.show_info()
            time.sleep(VELOCIDAD)

        Terminal.move_cursor(lines + 12, 0)
        self.terminal.show_cursor()
        self.terminal.restore()


if __name__ == "__main__":
    game = Game()
    game.run()
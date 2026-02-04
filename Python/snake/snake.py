import sys, tty, termios, time, random, pickle, select

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

C_G="\033[32m"
C_R="\033[31m"
C_M="\033[35m"
C_GRAY="\033[37m"

SNAKE_BODY = "█"
initial_position = [(10,10),(10,9),(10,8),(10,7)]


fd = sys.stdin.fileno()
old_settings = termios.tcgetattr(fd)

def move_cursor(r,c):
    print(f"\033[{r};{c}H", end="")

def move_and_print(pos, txt):
    move_cursor(pos[0], pos[1])
    print(txt, end="", flush=True)


def read_key():
    if select.select([sys.stdin], [], [], 0)[0]:
        ch = sys.stdin.read(1)
        if ch == '\x1b':
            ch += sys.stdin.read(2)
            return {'\x1b[A':'U','\x1b[B':'D','\x1b[C':'R','\x1b[D':'L'}.get(ch)
        if ch in 'qQ': return 'Q'
        if ch in 'pP': return 'P'
    return None


def draw_map():
    print(CLEAR_SCREEN, end="")
    print("""
██████╗░██╗░░░██╗████████╗██╗░░██╗░█████╗░███╗░░██╗  ░██████╗███╗░░██╗░█████╗░██╗░░██╗███████╗
██╔══██╗╚██╗░██╔╝╚══██╔══╝██║░░██║██╔══██╗████╗░██║  ██╔════╝████╗░██║██╔══██╗██║░██╔╝██╔════╝
██████╔╝░╚████╔╝░░░░██║░░░███████║██║░░██║██╔██╗██║  ╚█████╗░██╔██╗██║███████║█████═╝░█████╗░░
██╔═══╝░░░╚██╔╝░░░░░██║░░░██╔══██║██║░░██║██║╚████║  ░╚═══██╗██║╚████║██╔══██║██╔═██╗░██╔══╝░░
██║░░░░░░░░██║░░░░░░██║░░░██║░░██║╚█████╔╝██║░╚███║  ██████╔╝██║░╚███║██║░░██║██║░╚██╗███████╗
╚═╝░░░░░░░░╚═╝░░░░░░╚═╝░░░╚═╝░░╚═╝░╚════╝░╚═╝░░╚══╝  ╚═════╝░╚═╝░░╚══╝╚═╝░░╚═╝╚═╝░░╚═╝╚══════╝""")
    print(f"▄"*(columns+2))
    print(f"█{' '*(columns)}█\n"*lines, end="")
    print(f"▀"*(columns+2))
    return {"U":8,"D":lines+9,"L":1,"R":columns+2}

def draw_snake(snake):
    for p in snake:
        move_and_print(p, f"{C_G}{SNAKE_BODY}{S_R}")

def move_snake(snake, direction):
    tail = snake.pop()
    r,c = snake[0]
    if direction == 'U': r -= 1
    if direction == 'D': r += 1
    if direction == 'L': c -= 1
    if direction == 'R': c += 1
    new_head = (r,c)
    snake.insert(0,new_head)
    move_and_print(new_head, f"{C_G}{SNAKE_BODY}{S_R}")
    move_and_print(tail, " ")
    return tail

def collision(snake, limits):
    r,c = snake[0]
    return (
        snake[0] in snake[1:] or
        r <= limits['U'] or r >= limits['D'] or
        c <= limits['L'] or c >= limits['R']
    )

def draw_fruit(snake, limits):
    pos=[]
    for r in range(limits['U']+1, limits['D']):
        for c in range(limits['L']+1, limits['R']):
            if (r,c) not in snake:
                pos.append((r,c))
    f=random.choice(pos)
    move_and_print(f,"●")
    return f

def show_info(user, score):
    move_cursor(lines+10,0)
    print(f"🐍 PUNTUACIÓN: {score}     🤖 JUGADOR: {user}", flush=True)


def start_game():
    tty.setcbreak(fd)
    print(CURSOR_HIDE, end="")
    user=""
    while not user:
        draw_map()
        user=input("🤖 NOMBRE: ")
        if len(user)>=USERNAME_MAX_LENGTH:
            user=""

    limits=draw_map()
    snake=initial_position[:]
    draw_snake(snake)
    fruit=draw_fruit(snake,limits)
    score=0
    direction='R'

    while True:
        key=read_key()
        if key=='Q': break
        if key in ['U','D','L','R']:
            if not (key=='U' and direction=='D' or
                    key=='D' and direction=='U' or
                    key=='L' and direction=='R' or
                    key=='R' and direction=='L'):
                direction=key

        tail=move_snake(snake,direction)

        if snake[0]==fruit:
            snake.append(tail)
            score+=1
            fruit=draw_fruit(snake,limits)

        if collision(snake,limits):
            break

        show_info(user,score)
        time.sleep(VELOCIDAD)

    move_cursor(lines+12,0)
    print(CURSOR_SHOW)
    termios.tcsetattr(fd, termios.TCSADRAIN, old_settings)

start_game()

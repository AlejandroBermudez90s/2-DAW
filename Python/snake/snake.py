import sys, tty, termios
import threading
import time



# COLORS AND CURSOR
CURSOR_HIDE="\033[?25l"                         # HIDE CURSOR
CURSOR_SHOW="\033[?25h"                         # SHOW CURSOR
CLEAR_SCREEN="\033c"                            # CLEAR SCREEN
S_R="\033[0m"                                   # STYLE RESET
S_D="\033[2m"                                   # STYLE DIM
S_B="\033[1m"                                   # STYLE BOLD
R_L="\033[2K"                                   # REMOVE LINE
M_U="\033[A"                                    # MOVE UP 1 LINE
C_G="\033[32m"                                  # COLOR GREEN
C_LG="\033[92m"                                 # COLOR LIGHT GREEN
C_R="\033[31m"                                  # COLOR RED
C_Y="\033[33m"                                  # COLOR YELLOW
C_LR="\033[91m"                                 # COLOR LIGHT RED
C_B="\033[34m"                                  # COLOR BLUE
C_M="\033[35m"                                  # COLOR MAGENTA
C_C="\033[36m"                                  # COLOR CYAN
 
# CONFIG 
lines = 15                                      # MAP SIZE LINES
columns = 50                                    # MAP SIZE COLUMNS
 
# VARIABLES THREAD MODIFIED
key_pressed = "R"                               # USER LAST KEY PRESSED



fd = sys.stdin.fileno()
old_settings = termios.tcgetattr(fd)
lock = threading.Lock()
def start_keyboard():
    """
    Capture keystrokes in background using threads:
        Q, P, UP, DOWN, LEFT, RIGHT: save key value in {key_pressed} variable
        +, -: modify {speed} variable in 0.05 steeps
 
    GLOBAL VARIABLES MODIFIED
      {key_pressed}
    """

    def read_keyboard():
        global key_pressed
        try:
            key_read=""
            tty.setcbreak(fd)
            while key_read != "q":
                ch1 = sys.stdin.read(1)
                if ch1 == '\x1b':  # posible flecha
                    ch2 = sys.stdin.read(1)
                    ch3 = sys.stdin.read(1)
                    k = ch1 + ch2 + ch3
                    if k == '\x1b[A':
                        key_read = "U"
                    elif k == '\x1b[B':
                        key_read = "D"
                    elif k == '\x1b[C':
                        key_read = "R"
                    elif k == '\x1b[D':
                        key_read = "L"
                elif ch1 == 'q':
                    key_read = "Q"
                elif ch1 == 'p':
                    key_read = "P"
                elif ch1 == "+":
                    key_read = "+"
                elif ch1 == "-":
                    key_read = "-" 
                with lock:
                    key_pressed = key_read                    
        finally:
            termios.tcsetattr(fd, termios.TCSADRAIN, old_settings)
 
    key_thread = threading.Thread(target=read_keyboard, daemon=True)
    key_thread.start()
    return key_thread


def draw_map():

    print("██████╗ ██╗   ██╗████████╗██╗  ██╗ ██████╗ ███╗   ██╗    ███████╗███╗   ██╗ █████╗ ██╗  ██╗███████╗    ")
    print("██╔══██╗╚██╗ ██╔╝╚══██╔══╝██║  ██║██╔═══██╗████╗  ██║    ██╔════╝████╗  ██║██╔══██╗██║ ██╔╝██╔════╝  ")
    print("██████╔╝ ╚████╔╝    ██║   ███████║██║   ██║██╔██╗ ██║    ███████╗██╔██╗ ██║███████║█████╔╝ █████╗      ")
    print("██╔═══╝   ╚██╔╝     ██║   ██╔══██║██║   ██║██║╚██╗██║    ╚════██║██║╚██╗██║██╔══██║██╔═██╗ ██╔══╝      ")
    print("██║        ██║      ██║   ██║  ██║╚██████╔╝██║ ╚████║    ███████║██║ ╚████║██║  ██║██║  ██╗███████╗     ")
    print("╚═╝        ╚═╝      ╚═╝   ╚═╝  ╚═╝ ╚═════╝ ╚═╝  ╚═══╝    ╚══════╝╚═╝  ╚═══╝╚═╝  ╚═╝╚═╝  ╚═╝╚══════╝      ")

def start_game():

    start_keyboard() 
    draw_map()

    while True:
        action=key_pressed
        print(action)
        time.sleep(0.1)

    end_game()

def end_game():
    termios.tcsetattr(fd, termios.TCSADRAIN, old_settings)
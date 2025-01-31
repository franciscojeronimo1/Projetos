from tkinter.ttk import Label, Button, Combobox, Style
from tkinter import messagebox
from ttkthemes import ThemedTk
from PIL import Image, ImageTk
import keyboard
import pyautogui
import json
import threading
import pynput
import time

HOTKEYS = ['Desligado','F1', 'F2', 'F3', 'F4', 'F5', 'F6', 'F7', 'F8', 'F9', 'F10', 'F11', 'F12']

root = ThemedTk(theme="arc", themebg=True)
root.title("Interface")
#root.geometry("500x500+250+250")
root.resizable(False,False)
style = Style()
style.configure('TButton', font=("Roboto", 12))

def generate_widget(widget, row, column, sticky="NSEW", columnspan=None, **kwargs):
    my_widget = widget(**kwargs)
    my_widget.grid(row=row, column=column, padx=5, pady=5,columnspan=columnspan, sticky =sticky)
    return my_widget

def load_trash():
    load_image = Image.open('trash-icon.jpg')
    resized_image = load_image.resize((20, 20))
    return ImageTk.PhotoImage(resized_image)

lbl_food = generate_widget(Label, row=0, column=0, sticky="W", text="Hotkey usa a cada 10s", font=("Roboto",12))
cbx_food = generate_widget(Combobox, row=0, column=1, values=HOTKEYS, state="readonly", font=("Roboto", 12), width=12)
cbx_food.current(0)

rgb = ''
mana_position = ''

lbl_cast = generate_widget(Label, row=1, column=0, sticky="W", text="Hotkey cast", font=("Roboto",12))
cbx_cast= generate_widget(Combobox, row=1, column=1, values=HOTKEYS, state="readonly", font=("Roboto", 12), width=12)
cbx_cast.current(0)

def get_mana_position():
    global rgb
    global mana_position

    messagebox.showinfo(title="Position", message="Posicione o mouse em cima da barra de vida que estiver baixa, onde a parte estiver sem a cor vermelha e pressione shift")
    keyboard.wait("shift")
    x, y = pyautogui.position()
    rgb = pyautogui.screenshot().getpixel((x, y))
    messagebox.showinfo(title='Vida Result', message=f"X: {x} Y: {y} - RGB: {rgb}")
    lbl_mana_position.configure(text=f"({x}, {y})")
    mana_position = [x, y]

btn_mana_position = generate_widget(Button, row=2, column= 0, text="Position", command=get_mana_position)
lbl_mana_position = generate_widget(Label, row=2, column=1, text="Empty", font=("Roboto", 12), sticky="W")

trash = load_trash()

def clear():
    lbl_mana_position.configure(text="Empty")

btn_mana_position_tash = generate_widget(Button, row=2, column=1, image=trash, sticky="E")
btn_mana_position_tash.configure(command=clear)

btn_opacity = generate_widget(Button, row=3, column=0, text="Apply opacity", columnspan=2)


def save():
    print('salvando arquivos...')
    my_data = {
        "food": {
            "value": cbx_food.get(),
            "position": cbx_food.current()
        },
        "spell": {
            "value": cbx_cast.get(),
            "position": cbx_cast.current()
        },
        "mana_pos": {
            "position": mana_position,
            "rgb": rgb
        }
    }
    with open('infos.json', 'w') as file:
        file.write(json.dumps(my_data))

def load():
    with open('infos.json', 'r') as file:
        data = json.loads(file.read())
    cbx_food.current(data['food']['position'])
    cbx_cast.current(data['spell']['position'])
    lbl_mana_position.configure(text=data['mana_pos']['position'])
    return data
        

btn_load = generate_widget(Button, row=4, column=0, text="Load", command=load)

def run():
    wai_to_eat_food = 0.1
    time_food = time.time()
    while not myEvent.is_set():
        if data['mana_pos']['position'] is not None:
            x = data['mana_pos']['position'][0]
            y = data['mana_pos']['position'][1]
            if pyautogui.pixelMatchesColor(x, y, tuple(data['mana_pos']['rgb'])):
                if data['spell']['value'] != 'Desligado':
                    if int(time.time() - time_food) >= wai_to_eat_food:
                        pyautogui.press(data['spell']['value'])
                        time_food = time.time()
            if data['food']['value'] != 'Desligado':
                if int(time.time() - time_food) >= wai_to_eat_food:
                    print('usando a cada segundos')
                    pyautogui.press(data['food']['value'])
                    time_food = time.time()
    print('bot parado')
def key_code(key):
    if key == pynput.keyboard.Key.esc:
        myEvent.set()
        root.deiconify()
        return False

def listener_keyboard():
    with pynput.keyboard.Listener(on_press=key_code) as listener:
        listener.join()
    

def start():
    root.iconify()
    save()
    global data
    data = load()
    global myEvent
    myEvent = threading.Event()
    global start_th
    start_th = threading.Thread(target=run)
    start_th.start()
    keyboard_th = threading.Thread(target=listener_keyboard)
    keyboard_th.start()

btn_start = generate_widget(Button, row=4, column=1, text="Start", command=start)


root.mainloop()

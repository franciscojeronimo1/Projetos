from tkinter.ttk import Label, Button, Combobox, Style
from tkinter import messagebox
from ttkthemes import ThemedTk
from PIL import Image, ImageTk
import keyboard
import pyautogui

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

lbl_food = generate_widget(Label, row=0, column=0, sticky="W", text="Hotkey eat food", font=("Roboto",12))
cbx_food = generate_widget(Combobox, row=0, column=1, values=HOTKEYS, state="readonly", font=("Roboto", 12), width=12)
cbx_food.current(0)

lbl_cast = generate_widget(Label, row=1, column=0, sticky="W", text="Hotkey cast", font=("Roboto",12))
cbx_cast= generate_widget(Combobox, row=1, column=1, values=HOTKEYS, state="readonly", font=("Roboto", 12), width=12)
cbx_cast.current(0)

def get_mana_position():
    messagebox.showinfo(title="Mana Position", message="Posicione o mouse em cima da barra de vida e pressione insert")
    keyboard.wait("insert")
    x, y = pyautogui.position()
    rgb = pyautogui.screenshot().getpixel((x, y))
    messagebox.showinfo(title='Vida Result', message=f"X: {x} Y: {y} - RGB: {rgb}")

btn_mana_position = generate_widget(Button, row=2, column= 0, text="Mana Position", command=get_mana_position)
lbl_mana_position = generate_widget(Label, row=2, column=1, text="Empty", font=("Roboto", 12), sticky="W")

trash = load_trash()
btn_mana_position_tash = generate_widget(Button, row=2, column=1, image=trash, sticky="E" )

btn_opacity = generate_widget(Button, row=3, column=0, text="Apply opacity", columnspan=2)

btn_load = generate_widget(Button, row=4, column=0, text="Load",)
btn_start = generate_widget(Button, row=4, column=1, text="Start",)
root.mainloop()

import tkinter
from ttkthemes import ThemedTk

root = ThemedTk(theme="black", themebg=True)
root.title("Interface")
root.geometry("500x500+250+250")
root.resizable(False,False)

root.mainloop()
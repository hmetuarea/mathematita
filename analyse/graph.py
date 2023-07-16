import matplotlib.pyplot as plt
import numpy as np

X = np.linspace(-1,1)
Y = [ x**2 for x in X ]

def ploot(X,Y):
    fig, ax = plt.subplots()
    plt.title("Essai 1")
    ax.plot(X,Y)
    display(fig,target="graph-essai",append="False")
ploot(X,Y)
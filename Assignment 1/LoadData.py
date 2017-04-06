from sklearn.datasets import load_linnerud
from sklearn import tree

import os
import subprocess
import csv as csv

import pandas as pd
import numpy as np
from sklearn.tree import DecisionTreeClassifier, export_graphviz

def visualize_tree(tree):
    with open("linnerud.dot", 'w') as f:
        export_graphviz(tree, out_file=f)

    command = ["/Users/Splitix/anaconda/pkgs/graphviz-2.38.0-4/bin/dot", "-Tpng", "linnerud.dot", "-o", "books.png"]
    try:
        subprocess.check_call(command)
    except:
        exit("Could not run dot, ie graphviz, to "
             "produce visualization")

# csv_file = csv.reader(open('Andy-Weir-The-Martian.csv', 'rb'))
csv_file = np.genfromtxt("forestfires.csv", delimiter=',')
data = []
for row in csv_file:
    data.append(row)
data = np.array(data)

clf = tree.DecisionTreeClassifier()
boston = load_linnerud()

clf = clf.fit(data.data, data.target)

visualize_tree(clf)
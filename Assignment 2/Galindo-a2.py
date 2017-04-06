from sklearn.cluster import KMeans
import numpy as np
import sys

size = int(sys.argv[1])
file = sys.argv[2]

mainList = list()

with open(file, 'r') as infile:
    for line in infile:
        mainList.append(line.split())


X = np.array(mainList)
kmeans = KMeans(n_clusters=size, random_state=0).fit(X)
kmeans.labels_

index = 0
f = open('output.txt', 'w+')
for list in mainList:
    list.append(str(kmeans.labels_[index] + 1))
    f.write(str(list[0]) + " " + str(list[1]) + " " + str(list[2]) + "\n")
    index += 1

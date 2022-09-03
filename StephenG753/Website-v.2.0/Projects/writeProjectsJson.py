#!/usr/bin/env python3

import json
from pathlib import Path
import os
os.chdir('/home/stepheng753/Projects/Websites/StephenG753/Website-v.2.0/Projects/')
filename = 'projectsToDisplay.json'
file = open(filename)
data = json.load(file)

for project in data:
    curr_project = data[project]
    directory = curr_project['Directory']
    curr_project['Files'] = []

    sub_dir_dict = {}
    for path, subdirs, files in os.walk(directory):
        for name in files:
            file = os.path.join(path, name)
            sub_dir = file[len(directory): file.find('/', len(file) - len(name) - 1)] + '/'
            sub_dir = './' if sub_dir == '/' else sub_dir


            if (sub_dir in sub_dir_dict):
                sub_dir_dict[sub_dir].append(name)
                sub_dir_dict[sub_dir].sort()
            else:
                sub_dir_dict[sub_dir] = [name]

    for key in sorted(sub_dir_dict):
        curr_project['Files'].append({'Subdirectory' : key, 'File' : sub_dir_dict[key]})


with open(filename, 'w') as write_file:
    json.dump(data, write_file, indent=4, sort_keys=True)

#!/usr/bin/env python
import os
import urllib
import markdown
 
def rel(*x):
    return os.path.join(os.path.abspath(os.path.dirname(__file__)), *x)
 
directory = rel('content/blog/')
 
md = filter(lambda x: x.endswith('.md'), os.listdir(directory))
 
for a in md:
    b = directory + a
    f = open(b, 'r')
    filedata = f.read()
    new = filedata.replace('/media/images', 'http://macgera.s3.amazonaws.com/old-media/images')
    f.close()
    f = open(b, 'w')
    f.write(new)
    f.close()

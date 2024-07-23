import requests
import json

def get_newsapi(category):
    call = 'https://newsapi.org/v2/top-headlines?'
    api_key = 'apiKey=ad3aa392a85b4007a3d4c225c5c6177e'

    param = {'country' : 'us', 'category' : category}
    param_str = ""
    
    for field in param.keys():
        param_str += field + "=" + param[field] + '&'
    
    call += param_str + api_key

    response = requests.get(call)
    return response.json()



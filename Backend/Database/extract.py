import requests
from List_Api.googeapi import get_youtube_search
from List_Api.newsapi import get_newsapi

# Request all Top Headlines for the US (documentation : https://newsapi.org/ )

Articles = { "tag":"Articles", 'category':"Technology" , "call":get_newsapi("technology")}

List_Youtube = {"Politics" : "/m/05qt0", "Technology" :"/m/07c1v" }

Youtube_pol = {"tag":"Youtube" , 'category':"Politics" ,"call":get_youtube_search(List_Youtube["Politics"])}
Youtube_tech = {"tag":"Youtube" , 'category':"Technology" ,"call":get_youtube_search(List_Youtube["Technology"])}

def format_art(data,api_cat):
    res = []
    for obj in data:
        obj["category"] = api_cat
        obj["source"] = obj["source"]["name"]
        res.append(obj)
    return res

def format_data(data,api_cat):
    res = []
    for obj in data:
        obj_id = obj["id"]
        del obj["id"]
        obj["category"] = api_cat
        obj["videoId"] = obj_id["videoId"]
        res.append(obj)
    return res



# [SORT : Remove obj article with null value] [JSON obj -> list] 
def extract(call_info):

    dict = call_info["call"]
    api_tag = call_info["tag"]
    api_cat = call_info["category"]

    res = []

    if (api_tag == "Youtube"):

        data_res = []
        data = dict['items']

        for obj in data:
            fields=["id"]
            if (obj["snippet"]["description"] != ""):
                for key in list(obj.keys()):
                    if key not in fields:
                        obj.pop(key)
                data_res.append(obj)
        res = format_data(data_res,api_cat)  

    elif (api_tag == "Articles"):

        data_res = []
        data = dict['articles']

        for obj in data:
            
            keys = list(obj.keys())
            add = True
            i = 0
        
            while (add and i < len(keys)):
                add &=  (obj[keys[i]] != None and obj[keys[i]] != "")  
                i +=1
        
            if (add):
                data_res.append(obj)
        res = format_art(data_res,api_cat)

    return res
    
def getData(calls):
    res = dict()
    i = 0
    while (i < len(calls)):
        call_info = calls[i]
        api_str = call_info["tag"]
        res[api_str] = extract(call_info)
        i +=1

    return res   

def getAllData():
    return getData([Articles])

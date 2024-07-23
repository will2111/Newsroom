from load import load
from extract import getAllData

if __name__ == '__main__':
    data = getAllData()
    load(data)
    



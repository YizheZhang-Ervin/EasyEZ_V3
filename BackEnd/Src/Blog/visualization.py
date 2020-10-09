import sys
sys.path.append('../')
import tushare as ts
import sqlite3
import pandas as pd
from PersonalWebsite import settings
from django.http import HttpResponse,JsonResponse
from django.shortcuts import redirect 
import json

path = settings.BASE_DIR / 'db.sqlite3'
engine = sqlite3.connect(path,check_same_thread=False)
tableName='shindex'

class DBOperate:
    def __init__(self,engineDB,tableName):
        self.engine = engineDB
        self.table = tableName

    def getDataFromAPI(self,stockNo='sh',startDate='2019-01-01',endDate='2020-10-08'):
        dt = ts.get_hist_data(code=stockNo,start=startDate,end=endDate)
        dt.to_sql(name=self.table,con=self.engine)

    def updateDataFromAPI(self,stockNo='sh'):
        dt = ts.get_hist_data(code=stockNo)
        dt.to_sql(name=self.table,con=self.engine,if_exists='append')

    def searchFromDB(self,sql):
        rst = self.engine.execute(sql).fetchall()
        return rst

    def dbToDataframe(self,sql,cols=['date','open','high','close','low','volume']):
        dataset = pd.read_sql_query(sql, self.engine)
        dataset2 = dataset[cols]
        return dataset2

def getPriceVolDate(request):
    dbo = DBOperate(engine,tableName)
    sql1 = f"SELECT date,open,close,low,high,volume FROM {tableName} order by date ASC"
    data1 = dbo.searchFromDB(sql1)
    rst = []
    # for i in data1:
    #     datadict = {}
    #     datadict['volume'] = i[0]
    #     datadict['open'] = i[1]
    #     datadict['high'] = i[2]
    #     datadict['close'] = i[3]
    #     datadict['low'] = i[4]
    #     rst.append(datadict)
    # return HttpResponse(json.dumps(rst),content_type="application/json")
    [rst.append([i[0],i[1],i[2],i[3],i[4],i[5]]) for i in data1]
    return JsonResponse(rst,safe=False)

def updateDate(request):
    dbo = DBOperate(engine,tableName)
    dbo.updateDataFromAPI()
    # rst = {'status':'success'}
    # return JsonResponse(rst,safe=False)
    return redirect('/home/')
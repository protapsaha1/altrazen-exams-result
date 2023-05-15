import PyPDF2
import json

def response(semester,sem_txt):
    print(semester)
    with open(semester,'rb') as file:
        data = PyPDF2.PdfReader(file)
        data_txt = []
        with open(sem_txt,'w+') as data_file:
            for i in range(len(data.pages)):
                # data_file.write((data.pages[i].extract_text()))
                data_txt.append((data.pages[i].extract_text()).replace('\n',''))
        print(data_txt)
                

response('../bteb_pdf/1st_Sem_2022_Regulation.pdf','data.json')
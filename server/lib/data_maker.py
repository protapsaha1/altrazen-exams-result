import PyPDF2

def response(semester,sem_txt):
    print(semester)
    with open(semester,'rb') as file:
        data = PyPDF2.PdfReader(file)
        with open(sem_txt,'w+') as data_file:
            for i in range(len(data.pages)):
                data_file.write((data.pages[i].extract_text()))
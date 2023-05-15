# import PyPDF2

# def extract_text_from_pdf(file_path):
#     with open(file_path, 'rb') as file:
#         pdf_reader = PyPDF2.PdfReader(file)
#         num_pages = len(pdf_reader.pages)

#         extracted_text = ''
#         for page_number in range(num_pages):
#             page = pdf_reader.pages[page_number]
#             extracted_text += page.extract_text()

#         return extracted_text
# print(extract_text_from_pdf('./1st_Sem_2022_Regulation.pdf'))


# import requests

# data = requests.get('https://raw.githubusercontent.com/rafeuddaraj/bteb-server/main/1st-sem.txt?token=GHSAT0AAAAAACCFZCHRUICIMM3REZ3RYJRMZDBZV7Q')

# # print(data.)


with open("\https://raw.githubusercontent.com/rafeuddaraj/bteb-server/main/1st-sem.txt?token=GHSAT0AAAAAACCFZCHRUICIMM3REZ3RYJRMZDBZV7Q.txt",'r') as f:
    print(f)
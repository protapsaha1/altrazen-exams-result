from lib.data_maker import response

# roll = input('Enter Your Roll: ')
sem = input("Enter You Semester: ")
sem_pdf = ''
sem_data = ''

if sem == '2':
    sem_pdf = './bteb_pdf/result_2nd.pdf'
    sem_data = './bteb_server/2nd.txt'
elif sem == "5":
    sem_pdf = './bteb_pdf/5th_Sem_2016_Regulation.pdf'
    sem_data = './bteb_server/5th.txt'

response(sem_pdf,sem_data)


# with open('https://raw.githubusercontent.com/rafeuddaraj/bteb-server/main/1st-sem.txt?token=GHSAT0AAAAAACCFZCHRUICIMM3REZ3RYJRMZDBZV7Q','r') as data_file:
#         result = data_file.read()
#         # print(result)
#         find_roll = result.find(roll)
#         k = find_roll
#         res = ''
#         flag = False
#         for i in range(find_roll, len(result)):
#             if result[i] == '{':
#                 res += result[k]
#                 k+=1
#                 flag = True
#                 if result[k] =='}':
#                     res+='}'
#                     break
#             elif result[i] =='(' and flag == False:
#                 res+=result[k]
#                 k+=1
#                 if result[k] == ')':
#                     res += ')'
#                     break
#         print(res)


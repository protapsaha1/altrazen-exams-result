
roll = input("Enter Your Roll: ")
sem = input("Enter Your Semester: ")

sem_data = ''

if sem == '1':
    sem_data = './bteb_server/1st.txt'
elif sem == '5':
    sem_data = './bteb_server/5th.txt'

with open(sem_data,'r') as data_file:
    result = data_file.read()
    find_roll = result.find(roll)
    k = find_roll
    res = ''
    flag = False
    for i in range(find_roll, len(result)):
        if result[i] == '{':
            res += result[k]
            k+=1
            flag = True
            if result[k] =='}':
                res+='}'
                break
        elif result[i] =='(' and flag == False:
            res+=result[k]
            k+=1
            if result[k] == ')':
                res += ')'
                break
    print(res)
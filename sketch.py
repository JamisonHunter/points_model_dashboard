def model_1():   
    team_subscription = float(input("Enter Team Subscription Amount: "))

    point_value = float(input("Enter Value of Each Point: "))

    j = float(input("Enter Jersey Sales: "))
    j_per = float(input("Enter Jersey Percent Return: "))
    d = float(input("Enter Drink Sales: "))
    d_per = float(input("Enter Drink Percent Return: "))
    t = float(input("Enter Ticket Sales: "))
    t_per = float(input("Enter Ticket Percent Return: "))

    fan_points_earned = 2*(j + d + t)
    fan_points_value = fan_points_earned*point_value

    profit = (j*(j_per/100) + t*(t_per/100) + d*(d_per/100)) - team_subscription

    print(f"Profit Margin: {profit}")
    print(f"Points Earned By Fans: {fan_points_earned}")
    print(f"Fan Points Value: {fan_points_value}")

def model_2():
    team_subscription = float(input("Enter Team Subscription Amount: "))

    point_value = float(input("Enter Value of Each Point: "))

    fans = float(input("Enter Number of Fans In Points System: "))

    average_spent = float(input("Enter Average Amount Spent By Fans: "))

    average_return = float(input("Enter Average Percent Return: "))

    fan_points_earned = average_spent*2*fans
    fan_points_value = fan_points_earned*point_value

    profit = ((average_return/100)*average_spent*fans) - team_subscription

    print(f"Profit Margin: {profit}")
    print(f"Points Earned By Fans: {fan_points_earned}")
    print(f"Fan Points Value: {fan_points_value}")

    
    
x = int(input("Please select model 1 or 2 (1/2): "))

if x == 1:
    model_1()
else:
    model_2()
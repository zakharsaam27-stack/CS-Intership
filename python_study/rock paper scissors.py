#не мой код, разбирал его по видео
import random

def get_choices():
    player_choice = input('Enter yor choice: ')
    options = ['rock', 'paper', 'scissors']
    opponent_choice = random.choice(options)
    choices = {'player': player_choice, 'opponent': opponent_choice}
    return choices

def check_win(player, opponent):
    print(f'You chose {player}, opponent chose: {opponent}')
    if player == opponent:
        return  'Tie'
    
    elif player == 'rock':
        if opponent == 'scissors':
            return 'You win'
        else:
            return 'You lose'
        
    elif player == 'paper':
        if opponent == 'scissors':
            return 'You lose'
        else:
            return 'You win'
        
    elif player == 'scissors':
        if opponent == 'paper':
            return 'You win'
        else:
            return 'You lose'
        
choices = get_choices()
result = check_win(choices['player'], choices['opponent'])
print(result)
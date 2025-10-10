class Game:
    def __init__(self):
        self.turn = 'X'
        self.tie = False
        self.winner = None
        self.board = {
            'a1': None, 'b1': None, 'c1': None,
            'a2': None, 'b2': None, 'c2': None,
            'a3': None, 'b3': None, 'c3': None,
        }
    
    def print_board(self):
        b = self.board
        print(f"""
        A   B   C
    1)  {b['a1'] or ' '} | {b['b1'] or ' '} | {b['c1'] or ' '}
        ----------
    2)  {b['a2'] or ' '} | {b['b2'] or ' '} | {b['c2'] or ' '}
        ----------
    3)  {b['a3'] or ' '} | {b['b3'] or ' '} | {b['c3'] or ' '}
        """)
    
    def print_message(self):
        ## If there is a tie: print("Tie game!")
        ## If there is a winner: print(f"{self.winner} wins the game!")
        ## Otherwise: print(f"It's player {self.turn}'s turn!")
        if self.tie:
            print("Tie game!")
        elif self.winner:
            print(f"{self.winner} wins the game!")
        else:
            print(f"It's player {self.turn}'s turn!")
    
    def render(self):
        self.print_board()
        self.print_message()
    
    def get_move(self): 
        while True:
            # prompt user for input
            # If the input is valid, update the board and break the loop
            # otherwise, print a message notifying the user of the invalid input and allow the loop to continue
            move = input(f"Enter a valid move (example: A1): ").lower()
            
            if move in self.board:
                if self.board[move] is None:
                    self.board[move] = self.turn
                    break
                else:
                    print("That space is already taken. Please choose another space.")
            else:
                print("Invalid input. Please enter a valid move (example: A1).")
    
    def check_for_winner(self):
        b = self.board
        
        if b['a1'] and (b['a1'] == b['b1'] == b['c1']):
            self.winner = self.turn
        elif b['a2'] and (b['a2'] == b['b2'] == b['c2']):
            self.winner = self.turn
        elif b['a3'] and (b['a3'] == b['b3'] == b['c3']):
            self.winner = self.turn
        elif b['a1'] and (b['a1'] == b['a2'] == b['a3']):
            self.winner = self.turn
        elif b['b1'] and (b['b1'] == b['b2'] == b['b3']):
            self.winner = self.turn
        elif b['c1'] and (b['c1'] == b['c2'] == b['c3']):
            self.winner = self.turn
        elif b['a1'] and (b['a1'] == b['b2'] == b['c3']):
            self.winner = self.turn
        elif b['c1'] and (b['c1'] == b['b2'] == b['a3']):
            self.winner = self.turn
    
    def check_for_tie(self):
        if self.winner:
            return
        
        board_full = True
        for value in self.board.values():
            if value is None:
                board_full = False
                break
        
        if board_full:
            self.tie = True
    
    def switch_turn(self):
        turn_lookup = {
            'X': 'O',
            'O': 'X'
        }
        self.turn = turn_lookup[self.turn]
    
    def play_game(self):
        print("Shall we play a game?")
        print()

        # While there is no winner or tie
            # render
            # get player input
            # check for a winner
            # check for a tie
            # switch turns
            # ...repeat until there is a winner or tie
        while not self.winner and not self.tie:
            self.render()
            self.get_move()
            self.check_for_winner()
            self.check_for_tie()
            self.switch_turn()
        
        self.render()


Game().play_game()
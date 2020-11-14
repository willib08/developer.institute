display_board = [["A":" ", "B":" ", "C": " "],
 		  ["D": " ", "E": " ", "F": " "],
 		  ["G": " ", "H": " ", "I": " "],]		

gameKeys = []
		
for key in boardGame:
	gameKeys.append(key)

def printBoard(board):
print(board["A"] + "|" + board["B"] + "|" + board["C"])
print("-+-+-")
print(board["D"] + "|" + board["E"] + "|" + board["F"])
print("-+-+-")
print(board["G"] + "|" + board["H"] + "|" + board["I"])

def player_input():
	turn = "X"
	count = 0
	if turn == "X":
		turn != "O"
	else:
		turn = "X"	

	for i in range(10):
		printBoard(boardGame)
		print("your move," + turn. "choose a square.")

		move = input()

		if boardGame[move] == " ":
			gameBoard[move] = turn
			count += 1
		else:
		print("already taken and filled.\nChoose another square")
		continue
def check_win():
		if count >= 5:
			if gameBoard["A"] == gameBoard["B"] == gameBoard["C"] != " ":
				printBoard(gameBoard)
				print("Fin.")
				print(" !!! " + turn + "WON!!!")
				break
			elif gameBoard["D"] == gameBoard["E"] == gameBoard["F"] != " ":
				printBoard(gameBoard)
				print("Fin.")
				print(" !!! " + turn + "WON!!!")
				break	
   			elif gameBoard["G"] == gameBoard["H"] == gameBoard["I"] != " ":
				printBoard(gameBoard)
				print("Fin.")
				print(" !!! " + turn + "WON!!!")
				break
			elif gameBoard["A"] == gameBoard["D"] == gameBoard["G"] != " ":
				printBoard(gameBoard)
				print("Fin.")
				print(" !!! " + turn + "WON!!!")
				break
			elif gameBoard["B"] == gameBoard["E"] == gameBoard["H"] != " ":
				printBoard(gameBoard)
				print("Fin.")
				print(" !!! " + turn + "WON!!!")
				break
			elif gameBoard["C"] == gameBoard["F"] == gameBoard["I"] != " ":
				printBoard(gameBoard)
				print("Fin.")
				print(" !!! " + turn + "WON!!!")
				break
			elif gameBoard["A"] == gameBoard["E"] == gameBoard["I"] != " ":
				printBoard(gameBoard)
				print("Fin.")
				print(" !!! " + turn + "WON!!!")
				break
			elif gameBoard["C"] == gameBoard["E"] == gameBoard["G"] != " ":
				printBoard(gameBoard)
				print("Fin.")
				print(" !!! " + turn + "WON!!!")
				break
#IF THERE IS A TIE
		if count == 9:
			print("Fin.")
			print("X and O tied")


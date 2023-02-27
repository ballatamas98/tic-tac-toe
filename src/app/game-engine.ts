export class GameEngine {

  public static lookingForWinner(playerOneIcon: string, playerTwoIcon: string, board: string[][]): string {

    if (this.isWinner(playerOneIcon, board)) {
      return playerOneIcon;
    } else if (this.isWinner(playerTwoIcon, board)) {
      return playerTwoIcon;
    } else {
      return "";
    }

  }
  static isWinner(playerOneIcon: string, board: string[][]): boolean {
    if (this.lookingforTheeInRow(playerOneIcon, board)) {
      return true;
    }
    if (this.lookingforTheeInColumn(playerOneIcon, board)) {
      return true;
    }
    if (this.lookingforTheeInDiagonal(playerOneIcon, board)) {
      return true;
    }
    return false;

  }

  static lookingforTheeInRow(playerIcon: string, board: string[][]): boolean {
    for (let i = 0; i < 3; i++) {
      if (board[i][0] === playerIcon && board[i][1] === playerIcon && board[i][2] === playerIcon) {
        return true;
      }
    }
    return false;
  }

  static lookingforTheeInColumn(playerIcon: string, board: string[][]): boolean {
    for (let j = 0; j < 3; j++) {
      if (board[0][j] === playerIcon && board[1][j] === playerIcon && board[2][j] === playerIcon) {
        return true;
      }
    }
    return false;
  }

  static lookingforTheeInDiagonal(playerIcon: string, board: string[][]): boolean {
    if (board[0][0] === playerIcon && board[1][1] === playerIcon && board[2][2] === playerIcon) {
      return true;
    }
    if (board[0][2] === playerIcon && board[1][1] === playerIcon && board[2][0] === playerIcon) {
      return true;
    }
    return false;
  }
}

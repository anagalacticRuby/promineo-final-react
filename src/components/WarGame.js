export function WarGame() {
  //This component is responsible for creating and enabling users to play a game of war with a virtual deck.
  //The Card class defines the essential components that will make up Card for the game of war.

  function RPSBoard() {
    return (
      <>
        <Table>
          <thead>
            <tr>
                <th></th>
                <th></th>
                <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </Table>
      </>
    );
  }

  return <RPSBoard />;
}

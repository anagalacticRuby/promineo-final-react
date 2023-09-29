export function Header() {
    //TODO: Convert anchor tags into react router links, add <route> and <routes> functionality
    //This component's purpose is to house the jsx responsible for displaying a header component on every page
    //The header will contain navigation links, and will be styled appropriately to show what page the user is currently on.
  return (
    <>
      <header>
        <nav>
          <a href="/">Home</a>
          <a href="/">Games</a>
          <a href="/">Crud</a>
        </nav>
      </header>
    </>
  );
}

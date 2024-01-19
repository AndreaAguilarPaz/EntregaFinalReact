
export const NavLink = ({href, text}) => {

    return (
      <a
        className="text-white hover:bg-green-300 text-lg uppercase font-semibold"
        href={href}
      >
        {text}
      </a>
    );
  };
  
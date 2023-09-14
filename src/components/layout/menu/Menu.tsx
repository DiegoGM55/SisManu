import MenuItem from './MenuItem';

const Menu = () => {
  return (
    <div
      className={`flex flex-col w-[200px] min-w-[160px] bg-zinc-50 h-screen border-x-2 border-y-zinc-100`}
    >
      <MenuItem name="Inicio" adress="/user" />
      <MenuItem name="Relatar problemas" adress="/user/issueReport" />
      <MenuItem name="Vizualizar problemas" adress="/user/showReports" />
      <MenuItem name="Lista de problemas" adress="/maintenance/reportsList" />
    </div>
  );
};

export default Menu;

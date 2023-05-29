import MenuItem from "./MenuItem";

export default function Menu(){
    return(
            <div className={`flex flex-col bg-zinc-50 h-screen border-x-2 border-y-zinc-100`}>
                <MenuItem item="Inicio" />
                <MenuItem item="Relatar problemas" />
                <MenuItem item="Vizualizar problemas" />
            </div>
    )
}
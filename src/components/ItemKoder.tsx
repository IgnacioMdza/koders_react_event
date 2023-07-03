interface Props {
    firstName: string;
    lastName: string;
    onDelete: () => void;
}

export default function ItemKoder(props: Props) {
    return (
        <div className="flex flex-col bg-stone-400 max-w-md mx-auto w-full rounded-lg items-center">
            <div className="flex flex-row w-full max-w-md mx-auto items-center justify-between p-2 rounded-lg   border-stone-300">
                <span className="text-lg">{props.firstName} {props.lastName}</span>
                <button
                    onClick={props.onDelete}
                    className="bg-stone-600 px-4 py-1 flex justify-center items-center rounded font-semibold"
                >
                    X
                </button>
            </div>
            <div className="bg-stone-500 w-full rounded-b-lg ">
                <img className='rounded-2xl m-4 mx-auto max-w-[140px]' src={`https://api.dicebear.com/6.x/initials/png?seed=${props.firstName} ${props.lastName}`} alt="" />
            </div>
        </div>
        
    );
}
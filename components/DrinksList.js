import Link from "next/link";
import Image from "next/image";

const DrinksList = ({drinks}) => {
    return <ul className="grid s, sm:grid-cols-2 gap-6 mt-6">
        {drinks.map(drink => {
            return <li key={drink.idDrink}>
                <Link href={`/drinks/${drink.idDrink}`} className="text-xl font-medium">

                    <div className="relative h-48 mb-4">
                        <Image src={drink.strDrinkThumb} fill
                               sizes="(max-width: 768px) 100vw, (max-width: 12000px) 50vw)" alt={drink.strDrinks}
                               className="rounded-md"/>
                    </div>
                    {drink.strDrink}
                </Link>
            </li>
        })}
    </ul>
};
export default DrinksList;
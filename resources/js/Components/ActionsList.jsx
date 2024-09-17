import Action from "@/Components/Action"

export default function ActionsList({ actions }) {

    return (
        <ol>
            {actions && actions.map(action =>
                <li key={action.id}>
                    <Action action={action} />
                </li>
            )}
        </ol>
    )
}

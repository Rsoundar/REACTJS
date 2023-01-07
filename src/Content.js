const Content = () => {
    const handleNameChange = () => {
        const name = ['Master', 'Bigil', 'Beast']
        const int = Math.floor(Math.random() * 3)
        return name[int]
    }
    return (
        <main>
            <p>
                {handleNameChange()}
            </p>
        </main>
    )
}

export default Content
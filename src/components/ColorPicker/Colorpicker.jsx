import s from './ColorPicker.module.css'

export function ColorPicker({options}) {
    return (
        <div className={s.container}>
            <h2 className={s.title}>Color Picker</h2>
            <div>
                {options.map(option => {
                return <span 
                        className={s.option}
                        key={option.label}
                        style={{backgroundColor: option.color}}
                        >{option.label}</span>
                        })}
            </div>
        </div>      
    )
}
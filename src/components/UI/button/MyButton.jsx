import classes from './MyButton.module.css'
const MyButton = ({children, ...props}) => {
	return (
		/*розгортаємо весь об'єкт в button. Таким чином всі пропси які буду передавати в компонент MyButton будут відлітити в цю кнопку. В тому числі і disabled*/
		<button {...props} className={classes.myBtn}>
			{children}
		</button>
	);
};

export default MyButton

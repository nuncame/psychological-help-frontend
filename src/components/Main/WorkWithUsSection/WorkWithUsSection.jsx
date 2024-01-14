import React from 'react';
import { Link } from 'react-router-dom';
import styles from './WorkWithUsSection.module.scss';
import Button from '../../buttonHeader/Button';

function WorkWithUsSection() {
	return (
		<section className={styles.warningSection}>
			<h2 className={styles.mainSubHeader}>Психологам</h2>

			<p className={styles.mainText}>
				Если вы профессиональный психолог, психиатр или психотерапевт, и
				хотите помочь нуждающимся в поддержке ментального здоровья,
				заполните заявку.
			</p>

			<Link to="/welcome" className={styles.link}>
				<Button
					additionalStyles={styles.mainBtn}
					buttonText="Работать с нами"
				/>
			</Link>
		</section>
	);
}

export default WorkWithUsSection;

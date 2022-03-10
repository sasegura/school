import { events } from '../utils/events';
import NextEvent from './NextEvent';

export default function Events() {
	return (
		<section className='popular_event'>
			<div className='container'>
				<div className='row'>
					<div className='col-12 col-sm-12 col-md-12 col-lg-12'>
						<div className='title'>
							<h2>Próximos Eventos</h2>
							<p>
								En esta sección podrás encontrar nuestros próximos eventos y
								cursos, apurate en obtener tu matrícula.
							</p>
						</div>
					</div>
					{events.map((event) => (
						<NextEvent
							key={event.id}
							name={event.name}
							day={event.day}
							month={event.month}
							description={event.description}
							image={event.image}
							detail={event.detail}
						/>
					))}
				</div>
			</div>
		</section>
	);
}

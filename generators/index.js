import componentGenerator from './component/index.js';
import routeGenerator from './route/index.js';
import logger from '../utils/logger.js';

console.clear();

logger.debug('#################################################\n');
logger.debug('\t\t*** Generator ***\n');
logger.debug('#################################################\n');

export default function (plop) {
	plop.setWelcomeMessage(logger.custom(`008080`, 'Please choose a generator and remember to choose the correct answer'));

	// Controller generator
	plop.setGenerator('Component', componentGenerator);
	plop.setGenerator('Route', routeGenerator);
};

import { App } from '@slack/bolt';
import dashboardBlocks from '../blocks/dashboardBlocks';
import logger from '../../logger';
import { getDashboardContext } from '../utilities/getDashboardContext';

function register(bolt: App): void {
  bolt.message(async ({ say, message }) => {
    const dashboardContext = await getDashboardContext(message.user);

    try {
      // Only respond if the message doesn't have a subtype (i.e., original user message event, deletion/edits are ignored)
      if (!message.subtype) {
        say({
          text: '',
          blocks: dashboardBlocks(dashboardContext),
        });
      }
    } catch (err) {
      logger.error('Something went wrong messaging the user...', err);
    }
  });
}

export default register;

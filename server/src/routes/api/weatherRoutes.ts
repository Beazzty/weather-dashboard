import { Router, type Request, type Response } from 'express';
const router = Router();

 import HistoryService from '../../service/historyService.js';

 import WeatherService from '../../service/weatherService.js';

// TODO: POST Request with city name to retrieve weather data
router.post('/', async (req: Request, res: Response) => {
  // TODO: GET weather data from city name
  const savedCity = req.body.city;
  try {
    const weatherData = await WeatherService.Weather(savedCity);
    res.status(200).json(weatherData);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch weather data' });
  }
});

// TODO: GET search history
router.get('/history', async (req: Request, res: Response) => {});

// * BONUS TODO: DELETE city from search history
router.delete('/history/:id', async (req: Request, res: Response) => {});

export default router;

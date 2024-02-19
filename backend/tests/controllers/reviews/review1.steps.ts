import { loadFeature, defineFeature } from "jest-cucumber"
import axios, { AxiosResponse } from 'axios'
const mongoose = require('mongoose')
const Review = require("../../../models/Review")

const feature = loadFeature('tests/features/reviews/review1.feature');

const SERVER_URL = 'http://localhost:3001'

export async function connectDBForTesting() {
    try {
      const dbUri = "mongodb://localhost:27017";
      const dbName = "test";
      await mongoose.connect(dbUri, {
        dbName,
        autoCreate: true,
      });
    } catch (error) {
      console.log("DB connect error");
    }
  }
  
  export async function disconnectDBForTesting() {
    try {
      await mongoose.connection.close();
    } catch (error) {
      console.log("DB disconnect error");
    }
  }

defineFeature(feature, test => {

    beforeAll(async () => {
        await connectDBForTesting();
      });
      afterAll(async () => {
        await disconnectDBForTesting();
      });

    let response: AxiosResponse

    test('Visualização de um Review', ({ given, when, then, and }) => {
        given(/^O restaurante de ID "(.*)" contém um review feito pelo usuário de ID "(.*)" de título "(.*)", texto "(.*)" e nota "(.*)"$/, async (idrest, iduser, title, text, rating) => {
            
            const review = await Review.findOne({user: iduser, restaurant: idrest, title: title, text: text, rating: rating})

            if (!review) {
                console.log("Esse restaurante não existe no DB")
                return
            }
            
        })
        when(/^é feita uma requisição GET para "(.*)"$/, async (path) => {
            try {
                response = await axios.get(`${SERVER_URL}${path}`)
            } catch (error) {
                console.error('Error during HTTP request:', error)
                return
            }
        })
        then(/^O status da resposta deve ser "(.*)"$/, (status) => {
            expect(String(response.status)).toBe(status)
        })
        and(/^Deve ser retornado um JSON com o review "(.*)"$/, (title) => { 
            expect(response.data).toEqual(
                expect.objectContaining({
                    title: title
                })
            )})
    });
});

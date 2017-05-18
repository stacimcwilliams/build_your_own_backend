
exports.seed = (knex, Promise) => {
  return knex('locations').del()
  .then(() => {
    return Promise.all([
      knex('locations').insert({
        organization_id: '1',
        country: 'South Africa',
        state: 'KwaZulu-Natal',
        city: 'St Lucia'
      }),
      knex('locations').insert({
        organization_id: '2',
        country: 'Brazil',
        state: 'Sao Paulo',
        city: 'Sao Paulo'
      }),
      knex('locations').insert({
        organization_id: '3',
        country: 'Thailand',
        state: 'Chiang Mai Province',
        city: 'Chiang Mai'
      }),  knex('locations').insert({
        organization_id: '4',
        country: 'Thailand',
        state: 'Chiang Mai Province',
        city: 'Chiang Mai'
      }),  knex('locations').insert({
        organization_id: '5',
        country: 'China',
        state: 'Beijing',
        city: 'Beijing'
      }),  knex('locations').insert({
        organization_id: '6',
        country: 'Belgium',
        state: 'Bilzen',
        city: 'Tongeren'
      }),  knex('locations').insert({
        organization_id: '7',
        country: 'Cambodia',
        state: 'Phnom Penh',
        city: 'Phnom Penh'
      }),  knex('locations').insert({
        organization_id: '8',
        country: 'Colombia',
        state: 'Cundinamarca',
        city: 'Bogota'
      }),  knex('locations').insert({
        organization_id: '9',
        country: 'Dominican Republic',
        state: 'Distrito Nacional',
        city: 'Santo Domingo'
      }),  knex('locations').insert({
        organization_id: '10',
        country: 'France',
        state: 'Paris',
        city: 'Paris'
      }),  knex('locations').insert({
        organization_id: '11',
        country: 'Germany',
        state: 'Brandenburg',
        city: 'Beeskow'
      }),  knex('locations').insert({
        organization_id: '12',
        country: 'Iceland',
        state: 'Reykjavík',
        city: 'Reykjavík'
      }),
      knex('locations').insert({
        organization_id: '13',
        country: 'India',
        state: 'Maharashtra',
        city: 'Mumbai'
      }),
      knex('locations').insert({
        organization_id: '14',
        country: 'Iraq',
        state: 'Salah ad Din',
        city: 'Ad-Dawr'
      }),
      knex('locations').insert({
        organization_id: '15',
        country: 'Brazil',
        state: 'Sao Paulo',
        city: 'Sao Paulo'
      }),
      knex('locations').insert({
        organization_id: '16',
        country: 'Japan',
        state: 'Aichi',
        city: 'Okazaki'
      }),
      knex('locations').insert({
        organization_id: '17',
        country: 'Jordan',
        state: 'Amman',
        city: 'Amman'
      }),
      knex('locations').insert({
        organization_id: '18',
        country: 'Kenya',
        state: 'Baragoi',
        city: 'Baragoi'
      }),
      knex('locations').insert({
        organization_id: '19',
        country: 'Lebanon',
        state: 'Beirut Governorate',
        city: 'Beirut'
      }),
      knex('locations').insert({
        organization_id: '20',
        country: 'Myanmar',
        state: 'Yangon Region',
        city: 'Yangon'
      }),
      knex('locations').insert({
        organization_id: '21',
        country: 'Nepal',
        state: 'Kathmandu',
        city: 'Kathmandu'
      }),
      knex('locations').insert({
        organization_id: '22',
        country: 'New Zealand',
        state: 'Greater Wellington Regional',
        city: 'Auckland'
      }),
      knex('locations').insert({
        organization_id: '23',
        country: 'North Korea',
        state: 'South Pyongan',
        city: 'Anju'
      }),
      knex('locations').insert({
        organization_id: '24',
        country: 'Norway',
        state: 'Aust-Agder',
        city: 'Arendal'
      }),
      knex('locations').insert({
        organization_id: '25',
        country: 'Pakistan',
        state: 'Mardan',
        city: 'Mardan'
      }),
      knex('locations').insert({
        organization_id: '26',
        country: 'Peru',
        state: 'Lima',
        city: 'Lima'
      }),
      knex('locations').insert({
        organization_id: '27',
        country: 'Philippines',
        state: 'Pangasinan',
        city: 'Alaminos'
      }),
      knex('locations').insert({
        organization_id: '28',
        country: 'Romania',
        state: 'Cluj',
        city: 'Cluj-Napoca'
      }),
      knex('locations').insert({
        organization_id: '29',
        country: 'Sweden',
        state: 'Alingsas',
        city: 'Alingsas'
      }),
      knex('locations').insert({
        organization_id: '30',
        country: 'Uzbekistan',
        state: 'Afrasiab',
        city: 'Afrasiab'
      }),
    ])
  })
}

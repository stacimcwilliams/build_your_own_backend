
exports.seed = (knex, Promise) => {
  return knex('organizations').del()
    .then(() => {
      return Promise.all([
        knex('organizations').insert({
          name: 'Go Eco',
          url: 'https://www.goeco.org/'
        }),
        knex('organizations').insert({
          name: 'Global Citizen Year',
          url: 'https://www.globalcitizenyear.org/'
        }),
        knex('organizations').insert({
          name: 'One World 365',
          url: 'http://www.oneworld365.org/'
        }),
        knex('organizations').insert({
          name: 'WWOOF',
          url: 'http://wwoof.net/'
        }),
        knex('organizations').insert({
          name: 'BUNAC',
          url: 'https://www.bunac.org/usa'
        }),
        knex('organizations').insert({
          name: 'American Hiking Society',
          url: 'https://americanhiking.org/'
        }),
        knex('organizations').insert({
          name: 'Global Volunteers',
          url: 'https://globalvolunteers.org/'
        }),
        knex('organizations').insert({
          name: 'Go Voluntouring',
          url: 'http://govoluntouring.com/'
        }),
        knex('organizations').insert({
          name: 'Projects Abroad',
          url: 'http://www.projects-abroad.org/'
        }),
        knex('organizations').insert({
          name: 'GeoVisions',
          url: 'http://geovisions.org/'
        }),
        knex('organizations').insert({
          name: 'Cross Cultural Solutions',
          url: 'https://www.crossculturalsolutions.org/'
        }),
        knex('organizations').insert({
          name: 'gvi',
          url: 'http://www.gviusa.com/'
        }),
        knex('organizations').insert({
          name: 'Lead adventures',
          url: 'http://www.lead-adventures.com/'
        }),
        knex('organizations').insert({
          name: 'IVHQ',
          url: 'https://www.volunteerhq.org/'
        }),
        knex('organizations').insert({
          name: 'ACDI',
          url: 'www.acdivoca.org'
        }),
        knex('organizations').insert({
          name: 'AMIZADE',
          url: 'https://amizade.org/'
        }),
        knex('organizations').insert({
          name: 'Concern Worldwide',
          url: 'http://www.concernusa.org/'
        }),
        knex('organizations').insert({
          name: 'Earthwatch Institute',
          url: 'http://earthwatch.org/'
        }),
        knex('organizations').insert({
          name: 'Go Abroad',
          url: 'https://www.goabroad.com/'
        }),
        knex('organizations').insert({
          name: 'Green Volunteers',
          url: 'http://www.greenvolunteers.org/'
        }),
        knex('organizations').insert({
          name: 'Habitat for Humanity, International',
          url: 'https://www.habitat.org/volunteer/long-term-opportunities/international'
        }),
        knex('organizations').insert({
          name: 'idealist',
          url: 'https://www.idealist.org/en/?type=ALL'
        }),
        knex('organizations').insert({
          name: 'Mentor',
          url: 'http://www.mentoring.org/'
        }),
        knex('organizations').insert({
          name: 'Volunteer International',
          url: 'http://volunteerinternational.org/'
        }),
        knex('organizations').insert({
          name: 'Conservation Volunteers',
          url: 'http://conservationvolunteers.com.au/'
        }),
        knex('organizations').insert({
          name: 'helpx',
          url: 'http://www.helpx.net/'
        }),
        knex('organizations').insert({
          name: 'UN Volunteers',
          url: 'https://www.unv.org/'
        }),
        knex('organizations').insert({
          name: 'Road 2 Argentina',
          url: 'http://www.road2argentina.com/'
        }),
        knex('organizations').insert({
          name: 'Transitions Abroad',
          url: 'http://www.transitionsabroad.com/'
        }),
        knex('organizations').insert({
          name: 'Maximo Nivel',
          url: 'https://maximonivel.com/'
        })
      ]);
    });
};  

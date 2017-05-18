
exports.seed = (knex, Promise) => {
  return knex('organizations').del()
    .then(() => {
      return Promise.all([
        knex('organizations').insert({
          name: 'Go Eco',
          url: 'https://www.goeco.org/',
          id: 1
        }),
        knex('organizations').insert({
          name: 'Global Citizen Year',
          url: 'https://www.globalcitizenyear.org/',
          id: 2
        }),
        knex('organizations').insert({
          name: 'One World 365',
          url: 'http://www.oneworld365.org/',
          id: 3
        }),
        knex('organizations').insert({
          name: 'WWOOF',
          url: 'http://wwoof.net/',
          id: 4
        }),
        knex('organizations').insert({
          name: 'BUNAC',
          url: 'https://www.bunac.org/usa',
          id: 5
        }),
        knex('organizations').insert({
          name: 'American Hiking Society',
          url: 'https://americanhiking.org/',
          id: 6
        }),
        knex('organizations').insert({
          name: 'Global Volunteers',
          url: 'https://globalvolunteers.org/',
          id:7
        }),
        knex('organizations').insert({
          name: 'Go Voluntouring',
          url: 'http://govoluntouring.com/',
          id:8
        }),
        knex('organizations').insert({
          name: 'Projects Abroad',
          url: 'http://www.projects-abroad.org/',
          id:9
        }),
        knex('organizations').insert({
          name: 'GeoVisions',
          url: 'http://geovisions.org/',
          id:10
        }),
        knex('organizations').insert({
          name: 'Cross Cultural Solutions',
          url: 'https://www.crossculturalsolutions.org/',
          id:11
        }),
        knex('organizations').insert({
          name: 'gvi',
          url: 'http://www.gviusa.com/',
          id:12
        }),
        knex('organizations').insert({
          name: 'Lead adventures',
          url: 'http://www.lead-adventures.com/',
          id:13

        }),
        knex('organizations').insert({
          name: 'IVHQ',
          url: 'https://www.volunteerhq.org/',
          id:14
        }),
        knex('organizations').insert({
          name: 'ACDI',
          url: 'www.acdivoca.org',
          id:15
        }),
        knex('organizations').insert({
          name: 'AMIZADE',
          url: 'https://amizade.org/',
          id:16
        }),
        knex('organizations').insert({
          name: 'Concern Worldwide',
          url: 'http://www.concernusa.org/',
          id:17
        }),
        knex('organizations').insert({
          name: 'Earthwatch Institute',
          url: 'http://earthwatch.org/',
          id:18
        }),
        knex('organizations').insert({
          name: 'Go Abroad',
          url: 'https://www.goabroad.com/',
          id:19
        }),
        knex('organizations').insert({
          name: 'Green Volunteers',
          url: 'http://www.greenvolunteers.org/',
          id:20
        }),
        knex('organizations').insert({
          name: 'Habitat for Humanity, International',
          url: 'https://www.habitat.org/volunteer/long-term-opportunities/international',
          id:21
        }),
        knex('organizations').insert({
          name: 'idealist',
          url: 'https://www.idealist.org/en/?type=ALL',
          id:22
        }),
        knex('organizations').insert({
          name: 'Mentor',
          url: 'http://www.mentoring.org/',
          id:23
        }),
        knex('organizations').insert({
          name: 'Volunteer International',
          url: 'http://volunteerinternational.org/',
          id:24
        }),
        knex('organizations').insert({
          name: 'Conservation Volunteers',
          url: 'http://conservationvolunteers.com.au/',
          id:25
        }),
        knex('organizations').insert({
          name: 'helpx',
          url: 'http://www.helpx.net/',
          id:26
        }),
        knex('organizations').insert({
          name: 'UN Volunteers',
          url: 'https://www.unv.org/',
          id:27
        }),
        knex('organizations').insert({
          name: 'Road 2 Argentina',
          url: 'http://www.road2argentina.com/',
          id:28
        }),
        knex('organizations').insert({
          name: 'Transitions Abroad',
          url: 'http://www.transitionsabroad.com/',
          id:29
        }),
        knex('organizations').insert({
          name: 'Maximo Nivel',
          url: 'https://maximonivel.com/',
          id:30
        })
      ]);
    });
};

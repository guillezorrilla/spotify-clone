import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const shazamCoreApi = createApi({
  reducerPath: 'shazamCoreApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://shazam-core.p.rapidapi.com/v1',
    prepareHeaders: headers => {
      headers.set(
        'X-RapidAPI-Key',
        '4163c62cf9msh97aa6f952edb727p1f3d3ejsn6f2e26696438'
      );
      headers.set('X-RapidAPI-Host', 'shazam-core.p.rapidapi.com');
      return headers;
    }
  }),
  endpoints: builder => ({
    getTopCharts: builder.query({
      query: () => ({
        url: '/charts/world'
      })
    }),
    getSongsByGenre: builder.query({
      query: genre => ({
        url: `/charts/genre-world?genre_code=${genre}`
      })
    }),
    getSongDetails: builder.query({
      query: ({ songid }) => ({
        url: `/tracks/details?track_id=${songid}`
      })
    }),
    getRelatedSongs: builder.query({
      query: ({ songid }) => ({
        url: `/tracks/related?track_id=${songid}`
      })
    }),
    getArtistDetails: builder.query({
      query: ({ artistid }) => ({
        url: `/artists/details?artist_id=${artistid}`
      })
    }),
    getSongsByCountry: builder.query({
      query: ({ countryCode }) => ({
        url: `/charts/country?country_code=${countryCode}`
      })
    }),
    getSongsBySearch: builder.query({
      query: ({ searchTerm }) => ({
        url: `/search/multi?search_type=SONGS_ARTISTS&query=${searchTerm}`
      })
    })
  })
});

export const {
  useGetTopChartsQuery,
  useGetSongDetailsQuery,
  useGetRelatedSongsQuery,
  useGetArtistDetailsQuery,
  useGetSongsByCountryQuery,
  useGetSongsByGenreQuery,
  useGetSongsBySearchQuery
} = shazamCoreApi;

/* eslint-disable testing-library/await-async-utils */
/* eslint-disable jest/valid-expect */
/* eslint-disable no-undef */
/// <reference types="cypress" />
describe("songs playlists element", () => {
  beforeEach(() => {
    cy.login_user("Avia", "1234");
    cy.visit("/Home");
    cy.get(".songs_playlist>.totalPlaylist>#playlistVideo").first().click();
  });

  it("possibility to play a song from songs list", () => {
    cy.get(".song-playlist").within(() => {
      cy.get(".totalImagePlaylist>#playVideo").first().click();
    });
    cy.get(".video-responsive").should("be.visible");
  });

  it("possibility to delete song if is your playlist", () => {
    cy.get(".song-playlist")
      .find(".totalImagePlaylist")
      .its("length")
      .then((len_before) => {
        cy.get(".totalImagePlaylist>#removeVideo").first().click();
        cy.wait(1000);
        cy.get(".song-playlist")
          .find(".totalImagePlaylist")
          .its("length")
          .then((len_after) => {
            expect(len_before).to.equal(len_after + 1);
          });
      });
  });

  it("not possibility to delete song if is not your playlist", () => {
    cy.get(".all_songs_playlist>.totalPlaylist>#playlistVideo").eq(2).click();
    cy.wait(1000);
    cy.get(".song-playlist").within(() => {
      cy.get(".totalImagePlaylist>#removeVideo").should("not.exist");
    });
  });
});

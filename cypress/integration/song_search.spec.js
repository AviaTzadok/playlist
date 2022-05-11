/* eslint-disable testing-library/await-async-utils */
/* eslint-disable no-undef */
/// <reference types="cypress" />
describe("song search", () => {
  beforeEach(() => {
    cy.login_user("Avia", "1234");
    cy.visit("/Home");
    cy.intercept("GET", "**/search/*", { fixture: "songs_obj.json" });

    cy.get(".songs_playlist>.totalPlaylist>#playlistVideo").first().click();
    cy.get("input[placeholder='Enter Search Keyword']").type("cypress");
    cy.get("#btnsearch").click();

    cy.get(".song-list>.totalImageSelector").as("songs").should("be.visible");
  });

  it("possibility to play songs", () => {
    cy.get("@songs").within(() => {
      cy.get("#playVideo").eq(1).click();
    });
    cy.get(".video-responsive").should("be.visible");
  });

  it("possibility to add a new song to to my playlist", () => {
    cy.get("@songs").within(() => {
      cy.get("#addVideo").eq(2).click();
    });
    cy.wait(1000);
    cy.get("@songs")
      .find("#playVideo>.titleSongList")
      .eq(2)
      .invoke("text")
      .then((songName) => {
        cy.log(songName);
        cy.get(".songs_playlist>.totalPlaylist>#playlistVideo").first().click();
        cy.get(".song-playlist").should("to.contain", songName);
      });
  });
});

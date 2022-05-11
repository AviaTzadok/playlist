/* eslint-disable no-undef */
/// <reference types="cypress" />
describe("playlists", () => {
  beforeEach(() => {
    cy.login_user("Avia", "1234");
    cy.visit("/Home");
  });

  describe("play the playlist element", () => {
    it("the user should see his playlists elements in the dashboard if he has playlists", () => {
      cy.get(".playlists").should("be.visible");
    });

    it("the user should see the public playlists elements in the dashboard", () => {
      cy.get(".all_songs_playlist").should("be.visible");
    });

    it("the user should play the playlists elements", () => {
      cy.get(".songs_playlist>.totalPlaylist>#playlistVideo").first().click();
      cy.get(".song-playlist").should("be.visible");
    });
  });

  describe("create a new playlist element", () => {
    beforeEach(() => {
      cy.get(".popupAddPlaylist").click();
    });

    it("popUp Create", () => {
      cy.get(
        "[class='MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation24 MuiDialog-paper MuiDialog-paperScrollPaper MuiDialog-paperWidthSm css-1t1j96h-MuiPaper-root-MuiDialog-paper']"
      ).should("be.visible");
    });

    // it("Create", () => {
    //   cy.get("[placeholder='playlist name'].MuiInput-input").type("new7");
    //   cy.get(
    //     "[class='MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium MuiButtonBase-root  css-1e6y48t-MuiButtonBase-root-MuiButton-root']"
    //   )
    //     .contains("Create")
    //     .click();
    //   cy.reload();
    //   cy.get(".songs_playlist").should("contain.text", "new7");
    // });

    it("cancellation Create", () => {
      cy.get("[placeholder='playlist name'].MuiInput-input").type("new8");
      cy.get(
        "[class='MuiButton-root MuiButton-text MuiButton-textPrimary MuiButton-sizeMedium MuiButton-textSizeMedium MuiButtonBase-root  css-1e6y48t-MuiButtonBase-root-MuiButton-root']"
      )
        .contains("Cancel")
        .click();
      cy.reload();
      cy.get(".songs_playlist").should("not.contain.text", "new8");
    });
  });
});

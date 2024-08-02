import { render, screen } from "@testing-library/react";
import { TagsInput } from "../TagsInput";
import { useAddTagsMutation } from "../../../../store/api";
import { MemoryRouter, Route, Routes } from "react-router-dom";

jest.mock("../../../../store/api", () => ({
  useAddTagsMutation: jest.fn(),
}));

describe('TagsInput Component', () => {
  const mockAddTags = jest.fn();

  beforeEach(() => {
    (useAddTagsMutation as jest.Mock).mockReturnValue([mockAddTags, { isLoading: false }]);
  });

  it('should render the component', () => {
    render(
      <MemoryRouter initialEntries={['/contacts/1']}>
        <Routes>
          <Route path="/contacts/:contactId" element={<TagsInput />} />
        </Routes>
      </MemoryRouter>
    );
    expect(screen.getByTestId('tags-form')).toBeInTheDocument();
    expect(screen.getByTestId('tag-input')).toBeInTheDocument();
    expect(screen.getByTestId('add-tags-button')).toBeInTheDocument();
  });

  it('should show a loading spinner when adding tags', async () => {
    (useAddTagsMutation as jest.Mock).mockReturnValue([mockAddTags, { isLoading: true }]);

    render(
      <MemoryRouter initialEntries={['/contacts/1']}>
        <Routes>
          <Route path="/contacts/:contactId" element={<TagsInput />} />
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByTestId('loading-spinner')).toBeInTheDocument();
  });
});

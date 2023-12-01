import { render, screen, fireEvent, waitFor } from "../../test-utils";
import Cita from "./Cita";

describe("Pruebas en App", () => {
  test("Debe verificar que la cita sea del personaje ingresado", async () => {
    render(<Cita />);

    const input = screen.getByPlaceholderText(/Ingresa el nombre del autor/i);
    fireEvent.change(input, { target: { value: "Lisa" } });

    const boton = await screen.findByText(/Obtener Cita/i);
    fireEvent.click(boton);

    await waitFor(() => {
      expect(screen.getByText(/Lisa Simpson/i)).toBeInTheDocument();
    });
  });

  test('Obtener cita aleatoria', async () => {
    render(<Cita />);

    const boton = await screen.findByText(/Obtener Cita/i);
    fireEvent.click(boton);

    await waitFor(() => {
      expect(screen.getByText(/Homer Simpson/i)).toBeInTheDocument();
    });
  });

  

  test('Verificar que la cita cambie al obtener una nueva cita aleatoria', async () => {
    render(<Cita />);

    const boton = await screen.findByText(/Obtener Cita/i);
    fireEvent.click(boton);

    const citaActual = screen.getByTestId('cita-texto').textContent;

    fireEvent.click(boton);

    await waitFor(() => {
      const nuevaCita = screen.getByTestId('cita-texto').textContent;
      expect(nuevaCita).not.toBe(citaActual);
    });
  });




  test("Mensaje de error cuando se proporcione datos numericos", async () => {
    render(<Cita />);

    const input = await screen.findByPlaceholderText(
      "Ingresa el nombre del autor"
    );
    const buttonCita = screen.getByText(/Obtener Cita/i);

    fireEvent.change(input, { target: { value: "001" } });
    fireEvent.click(buttonCita);

    await waitFor(() => {
      expect(screen.getByText("Por favor ingrese un nombre válido")).toBeInTheDocument();
    });
  });
  
});


  test(' mostrar una cita al azar al dar clic en el botón en el botón de cita', async () => {
    render(<Cita />);

    const botonObtenerCitaAleatoria = await screen.findByText(/Obtener cita aleatoria/i);
    fireEvent.click(botonObtenerCitaAleatoria);

    await waitFor(() => {
      expect(screen.queryByText("No se encontro ninguna cita")).not.toBeInTheDocument();
    });

  });

  test("Borrar satisfactoriamente la cita cuando se hace clic en el respectivo botón de Borrar", async () => {
    render(<Cita />);

    const input = screen.getByPlaceholderText(/Ingresa el nombre del autor/i);
    const obtenerCitaButton = await screen.findByText(/Obtener Cita/i);
    const borrarButton = screen.getByText(/Borrar/i);

    // Ingresa el nombre y obtiene la cita
    fireEvent.change(input, { target: { value: "Lisa" } });
    fireEvent.click(obtenerCitaButton);

    // Espera a que la cita se haya mostrado
    await waitFor(() => {
      expect(screen.getByText(/Lisa Simpson/i)).toBeInTheDocument();
    });

    // Hace clic en el botón Borrar
    fireEvent.click(borrarButton);

    // Espera a que la cita se haya borrado
    await waitFor(() => {
      expect(screen.queryByText(/Lisa Simpson/i)).toBeNull();
    });
  });

  


let selectedTraining = null;

function showTraining(trainingId) {
    // Oculta todos os treinamentos
    document.getElementById('training1').classList.add('hidden');
    document.getElementById('training2').classList.add('hidden');

    // Exibe o treinamento selecionado
    document.getElementById(trainingId).classList.remove('hidden');

    // Salva o treinamento selecionado
    selectedTraining = trainingId;

    // Oculta o menu e exibe o conteúdo
    document.getElementById('header').classList.add('hidden');
    document.getElementById('content').classList.remove('hidden');
}

function showMenu() {
    // Oculta o conteúdo e exibe o menu
    document.getElementById('content').classList.add('hidden');
    document.getElementById('header').classList.remove('hidden');

    // Oculta o treinamento selecionado se houver
    if (selectedTraining) {
        document.getElementById(selectedTraining).classList.add('hidden');
        selectedTraining = null; // Limpa o treinamento selecionado
    }
}

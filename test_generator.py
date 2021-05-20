import os


def make_dir(path):
    try:
        if os.path.isdir(path):
            print(f'The directory {path} already exists')
        else:
            os.mkdir(path)
            print(f'The directory {path} has been successfully created')
    except OSError:
        print(f'Creation of the directory {path} has been failed')


elements = ['FirstElement', 'SecondElement', 'ThirdElement']


def generate_instance_tests():
    make_dir('./results/instance_tests')
    template_file = open('./templates/instances_test_template.js', 'r')
    test = template_file.readlines()
    template_file.close()
    for element in elements:
        result_file = open(
            f'./results/instance_tests/{element}.instances.js', 'w')
        for line in test:
            modified_line = line.replace(
                'Element', element) if 'Element' in line else line
            result_file.write(modified_line)
        result_file.close()
        print(f'{element} instances test has been successfully generated')


def generate_field_tests():
    make_dir('./results/field_tests')
    template_file = open('./templates/fields_test_template.js', 'r')
    test = template_file.readlines()
    template_file.close()
    for element in elements:
        result_file = open(
            f'./results/field_tests/{element}.fields.js', 'w')
        for line in test:
            modified_line = line.replace(
                'Element', element) if 'Element' in line else line
            result_file.write(modified_line)
        result_file.close()
        print(f'{element} fields test has been successfully generated')


generate_instance_tests()
generate_field_tests()

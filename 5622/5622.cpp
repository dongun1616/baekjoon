#include <iostream>
#include <string>

using namespace std;
int main()
{
    string Dir;
    //string Alp = {"ABCDEFGHIJKLMNOPQRSTUVWXYZ"};

    int count = 0;

    cin >> Dir;

    for(int a=0;a<Dir.length();a++)
    {
        if(Dir[a] == 'A'||Dir[a] == 'B'||Dir[a] == 'C')
        {
            count += 3;
        }
        else if(Dir[a] == 'D'||Dir[a] == 'E'||Dir[a] == 'F')
        {
            count += 4;
        }
        else if(Dir[a] == 'G'||Dir[a] == 'H'||Dir[a] == 'I')
        {
            count += 5;
        }
        else if(Dir[a] == 'J'||Dir[a] == 'K'||Dir[a] == 'L')
        {
            count += 6;
        }
        else if(Dir[a] == 'M'||Dir[a] == 'N'||Dir[a] == 'O')
        {
            count += 7;
        }
        else if(Dir[a] == 'P'||Dir[a] == 'Q'||Dir[a] == 'R'||Dir[a] == 'S')
        {
            count += 8;
        }
        else if(Dir[a] == 'T'||Dir[a] == 'U'||Dir[a] == 'V')
        {
            count += 9;
        }
        else if(Dir[a] == 'W'||Dir[a] == 'X'||Dir[a] == 'Y'||Dir[a] == 'Z')
        {
            count += 10;
        }
    }
        
    cout << count << "\n";

    return 0;
}
#include <iostream>

using namespace std;
int main()
{
    int C;
    char N;
    int result = 0;

    cin >> C;
    for(int a=0;a<C;a++)
    {
        cin >> N;
        result = result + N - 48;
    }
    cout << result << endl;

    return 0;
}